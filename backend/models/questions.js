var mongoose = require('mongoose'),
mongoosePaginate = require('mongoose-paginate');

mongoose.Promise = global.Promise;

var questionsSchema = mongoose.Schema({
	cod: String,
	title: String,
	isCorrect: String,
	answers: [String]
});
questionsSchema.plugin(mongoosePaginate);

var Question = mongoose.model('questions', questionsSchema);

module.exports = {
	get_q: function(data,callback){
		Question.findOne({cod:data.question},'isCorrect',function(err,item){
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
				console.log('--------')
				console.log(data)
				console.log(item)
				if(data.answer!==item.isCorrect) callback({isCorrect: false});
				else callback({isCorrect: true});
			}
		});
	},
	list: function(params,paging,callback){
		paging.select = 'email nomb appat apmat grupo quizes';
		Question.paginate(params,paging,function(err,items){
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
		Question.find(params,fields,function(err,items){
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
		var nuevo = new Question(item).save(function(err,item){
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
		Question.findOne({_id: data._id},function(err,item){
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
		Question.findOne({_id: _id},function(err,post){
			post.remove();
			callback(_id);
		});
	},
	set_question: function(data,callback){
		Question.findOne({_id: data.Question},function(err,item){
			if(item!=null){
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
					var lock = false;
					quiz.answers.forEach(function(it){
						if(it.question==data.question){
							lock = true;
							callback({
								error: 'intenta repetir la pregunta '+data.step
							});
						}
					});
					if(lock==false){
						item.quizes[data.quiz].answers.push({
							question: data.question,
							answer: data.answer,
							isCorrect: data.isCorrect
						});
						item.quizes[data.quiz].grade += data.isCorrect?1:0;
						item.save(function(){
							callback({saved: true});
						});
					}
				}
			};
		});
	}
};