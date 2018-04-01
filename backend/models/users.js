var mongoose = require('mongoose'),
mongoosePaginate = require('mongoose-paginate');

mongoose.Promise = global.Promise;

var userSchema = mongoose.Schema({
	email: String,
	nomb: String,
	appat: String,
	apmat: String,
	grupo: String,
	quizes: [{
		grade: Number,
		answers: [{
			question: String,
			answer: String,
			tries: Number,
			points: Number
		}]
	}]
});
userSchema.plugin(mongoosePaginate);

var User = mongoose.model('users', userSchema);

module.exports = {
	get: function(data,callback){
		User.findOne(data,'email nomb appat apmat grupo',function(err,item){
			if(err){
				var errores = '';
				console.log('Error al guardar documento');
				for(x in err.errors){
					var txt = err.errors[x].path+': '+err.errors[x].message;
					console.log(txt);
					errores += txt+'\n';
				}
				callback({error: errores});
			}else{
				callback(item)
			}
		});
	},
	list: function(params,paging,callback){
		paging.select = 'email nomb appat apmat grupo test01';
		User.paginate(params,paging,function(err,items){
			if (!err) {
				var rpta = {
					paging: {
						count: items.total?items.total:0,
						data: {
							has_next: false,
							num_pages: items.pages?items.pages:1,
							end_index: 0,
							has_previous: false,
							page: items.page?items.page:1,
							start_index: 0
						}
					},
					rpta: items.docs
				}
				callback(rpta);
			}else{
				return console.log(err);
			}
		});
	},
	all: function(params,fields,callback){
		User.find(params,fields,function(err,items){
			if (!err) {
				callback(items);
			}else{
				return console.log(err);
			}
		});
	},
	create: function(data,callback){
		var item = {
			email: data.email,
			nomb: data.nomb,
			appat: data.appat,
			apmat: data.apmat,
			grupo: data.grupo
		}
		var nuevo = new User(item).save(function(err,item){
			if(err){
				var errores = '';
				console.log('Error al guardar documento');
				for(x in err.errors){
					var txt = err.errors[x].path+': '+err.errors[x].message;
					console.log(txt);
					errores += txt+'\n';
				}
				callback({error: errores});
			}else{
				callback(item)
			}
		});
	},
	update: function(data,callback){
		User.findOne({_id: data._id},function(err,item){
			item.email = data.email;
			item.nomb = data.nomb;
			item.appat = data.appat;
			item.apmat = data.apmat;
			item.grupo = data.grupo;
			item.save(function(err,item){
				if(err){
					var errores = '';
					console.log('Error al guardar documento');
					for(x in err.errors){
						var txt = err.errors[x].path+': '+err.errors[x].message;
						console.log(txt);
						errores += txt+'\n';
					}
					callback({error: errores});
				}else{
					callback(item)
				}
			});
		});
	},
	delete: function(_id,callback){
		User.findOne({_id: _id},function(err,post){
			post.remove();
			callback(_id);
		});
	},
	set_question: function(data,callback){
		User.findOne({_id: data._id},function(err,item){
			var quiz = item.quizes[data.quiz];
			if(quiz.answers[data.step]!=null){
				callback({
					error: 'intenta repetir la pregunta '+data.step
				});
			}else if(quiz.answers.length!=data.step){
				callback({
					error: 'intenta adelantar o retroceder la pregunta '+data.step
				});
			}else{
				item.quizes[data.quiz].answers.push({
					question: data.question,
					answer: data.answer,
					tries: data.tries
				});
				item.save(function(){
					callback({saved: true});
				});
			}
		});
	}
};