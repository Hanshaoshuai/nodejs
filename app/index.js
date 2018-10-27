// mongod --config /usr/local/etc/mongod.conf
// mongo
// nodemon

var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var multer  = require('multer');
var app = express();

var jsonParser = bodyParser.json();// 创建 application/json 解析
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/runoob";

app.use('/',express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));
app.use(bodyParser.urlencoded({ extended: false }));
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();  
});



//钱多多
app.post("/qq",function(req,res,next){
	var result = {
		'results' : [
		{'name':1001,'login':"您未登录!"},
		{'name':1002,'login':"您未登录!"},
		{'name':1003,'login':"您未登录!"},
		{'name':1004,'login':"您未登录!"},
	]};
  console.log("post请求参数：");
	res.send(result);
});






// app.configure(function() {
//   //默认情况下Express并不知道该如何处理该请求体，因此我们需要增加bodyParser中间件，用于分析  
//   //application/x-www-form-urlencoded和application/json  
//   //请求体，并把变量存入req.body。我们可以像下面的样子来“使用”中间件[这个保证POST能取到请求参数的值]：     
//   app.use(express.bodyParser());  
// }); 


// //创建集合
//  MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     console.log('数据库已创建');
//     var dbase = db.db("runoob");
//     dbase.createCollection('site', function (err, res) {
//         if (err) throw err;
//         console.log("创建集合!");
//         db.close();
//     });
// });
// //插入一条数据
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("runoob");
//     var myobj = { name: "菜鸟教程", url: "'😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 
// 		😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵
// 		 😳 😱 😨 😰 😢 😥 😭 😓 😪 😴 🙄 🤔 😬 🤐 😷 🤒 🤕 😈 👿 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 
// 		 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 👍 👎 👊 ✊ 🤘 👌 👈 👉 👆 👇 ✋  🖐 🖖 👋  💪 🖕 ✍️  💅 🖖 💄 💋 👄 👅 👂 👃 👁 👀 '" };
//     dbo.collection("site").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("文档插入成功");
//         db.close();
//     });
// });
// 
// //插入多条数据
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("runoob");
//     var myobj =  [
//         { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
//         { name: 'Google', url: 'https://www.google.com', type: 'en'},
//         { name: 'Facebook', url: 'https://www.google.com', type: 'en'}
//        ];
//     dbo.collection("site").insertMany(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("插入的文档数量为: " + res.insertedCount);
//         db.close();
//     });
// });
// 
// //更新一条数据
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("runoob");
//     var whereStr = {"name":'菜鸟教程'};  // 查询条件
//     var updateStr = {$set: { "url" : "https://www.runoob.com" }};
//     dbo.collection("site").updateOne(whereStr, updateStr, function(err, res) {
//         if (err) throw err;
//         console.log("文档更新成功");
//         db.close();
//     });
// });
// //更新多条数据
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("runoob");
//     var whereStr = {"type":'en'};  // 查询条件
//     var updateStr = {$set: { "url" : "https://www.runoob.com" }};
//     dbo.collection("site").updateMany(whereStr, updateStr, function(err, res) {
//         if (err) throw err;
//          console.log(res.result.nModified + " 条文档被更新");
//         db.close();
//     });
// });
// //删除一条数据
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("runoob");
//     var whereStr = {"name":'菜鸟教程'};  // 查询条件
//     dbo.collection("site").deleteOne(whereStr, function(err, obj) {
//         if (err) throw err;
//         console.log("文档删除成功");
//         db.close();
//     });
// });
// //删除多条数据
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("runoob");
//     var whereStr = { type: "en" };  // 查询条件
//     dbo.collection("site").deleteMany(whereStr, function(err, obj) {
//         if (err) throw err;
//         console.log(obj.result.n + " 条文档被删除");
//         db.close();
//     });
// });
// setTimeout(function(){
// 	// 查询数据
// 	MongoClient.connect(url, function(err, db) {
// 	    if (err) throw err;
// 	    var dbo = db.db("runoob");
// 	    dbo.collection("site"). find({}).toArray(function(err, result) { // 返回集合中所有数据
// 	        if (err) throw err;
// 	        // console.log(result);
// 	        db.close();
// 	    });
// 	});
// 	
// 	// 查询指定条件的数据
// 	MongoClient.connect(url, function(err, db) {
// 	    if (err) throw err;
// 	    var dbo = db.db("runoob");
// 	     var whereStr = {"name":'菜鸟教程'};  // 查询条件
// 	    dbo.collection("site").find(whereStr).toArray(function(err, result) {
// 	        if (err) throw err;
// 	        // console.log(result);
// 	        db.close();
// 	    });
// 	});
// },2000)

//是否登录
var uid = '';
app.post("/post0",function(req,res,next){
	var resto= res
  console.log("post请求参数：",req.body);
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("runoob");
		var whereStr = {'name':req.body.name};  // 查询条件
		dbo.collection("site"). find(whereStr).toArray(function(err, result) { // 返回集合中所有数据
			if (err) throw err;
			// console.log(result);
			db.close();
			if(result[0].signIn === "yes"){
				uid = result[0].name;
				console.log(uid);
				resto.send({code:200,msg:'登录状态'});
			}else{
				resto.send({code:1001,msg:'未登录'});
			}
		});
	});
});
//登录
app.post("/post",function(req,res,next){
	var resto= res
  console.log("post请求参数：",req.body);
	MongoClient.connect(url, function(err, db) {
			if (err) throw err;
			var dbo = db.db("runoob");
			var whereStr = {'name':req.body.name};  // 查询条件
			dbo.collection("site"). find(whereStr).toArray(function(err, result) { // 返回集合中所有数据
					if (err) throw err;
					// console.log(result);
					db.close();
					if(result.length == 0){
						resto.send({code:2001,msg:"用户不存在请先注册"});
					}else if(result.length == 1){
						if(result[0].name === req.body.name && result[0].password === req.body.password){
								MongoClient.connect(url, function(err, db) {
									var dbo = db.db("runoob");
									var whereStr = {'name':req.body.name};  // 查询条件
									var updateStr = {$set: { "signIn" : "yes" }};//更换内容
									dbo.collection("site").updateOne(whereStr, updateStr, function(err, res) {
											if (err) throw err;
											console.log("更换成功");
											db.close();
									});
								});
							resto.send({code:200,msg:'您已登录成功',imgId:result[0].imgId});
						}else{
							resto.send({code:1001,msg:'用户名或密码错误'});
						}
					}
					
			});
	});
});

//注册
app.post("/post1",function(req,res,next){
	var resto= res,
		reqs = req,
		result = {'code':1001,'msg':"注册失败请重新注测"};
  console.log("post请求参数：",req.body);
	req.body.signIn = '';
	MongoClient.connect(url, function(err, db) {
			if (err) throw err;
			var dbo = db.db("runoob");
			var whereStr = {'name':req.body.name};  // 查询条件
			dbo.collection("site"). find(whereStr).toArray(function(err, res) { // 返回集合中所有数据
					if (err) throw err;
					console.log(res);
					db.close();
					if(res.length == 0){
						MongoClient.connect(url, function (err, db) {
								if (err) throw err;
								console.log('数据库已创建');
								var dbase = db.db("runoob");
								dbase.createCollection('site', function (err, res) {
										if (err) throw err;
										console.log("创建集合!");
										db.close();
								});
						});
						MongoClient.connect(url, function(err, db) {
								if (err) throw err;
								var dbo = db.db("runoob");
								dbo.collection("site").insertOne(reqs.body, function(err, res) {
										if (err) throw err;
										console.log("恭喜您注册成功");
										db.close();
										result.code = 200;
										result.msg = "恭喜您注册成功,请登录";
										resto.send(result);
								});
						});
					}else if(res[0].name === req.body.name){
						result.code = 2002;
						result.msg = "用户已存在请去登录";
						resto.send(result);
					}
					
			});
	});
});

//退出登录
app.post("/post3",function(req,res,next){
	var resto= res,
		reqs = req,
		result = {'code':1001,'msg':"您未登录!"};
  console.log("post请求参数：",req.body);
	if(req.body.name === ''){
		resto.send(result);
	}else{
		MongoClient.connect(url, function(err, db) {
				if (err) throw err;
				var dbo = db.db("runoob");
				var whereStr = {'name':req.body.name};  // 查询条件
				var updateStr = {$set: { "signIn" : "no" }};
				dbo.collection("site").updateOne(whereStr, updateStr, function(err, res) {
						if (err) throw err;
						result.code = 200;
						result.msg = "退出成功";
						resto.send(result);
						db.close();
				});
		});
	}
});
//注销
app.post("/post2",function(req,res,next){
	var resto= res,
		reqs = req,
		result = {'code':1001,'msg':"注销失败或用户不存在"};
  console.log("post请求参数：",req.body);
	MongoClient.connect(url, function(err, db) {
	    if (err) throw err;
	    var dbo = db.db("runoob");
	    var whereStr = {'name':req.body.name};  // 查询条件
	    dbo.collection("site").deleteMany(whereStr, function(err, obj) {
	        if (err) throw err;
	        console.log(obj.result.n + "个用户");
					if(obj.result.n == 0){
						resto.send(result);
					}else{
						result.code = 200;
						result.msg = "注销成功";
						resto.send(result);
					}
	        db.close();
	    });
	});
});

//图片接口
app.get("/get",function(req,res){
  console.log("请求url：",req.path)
  console.log("Git请求参数：",req.query)
	MongoClient.connect(url, function(err, db) {
			if (err) throw err;
		var dbo = db.db("runoob");
		var whereStr = {'name':req.query.id};  // 查询条件
		dbo.collection("site"). find(whereStr).toArray(function(err, result) { // 返回集合中所有数据
			if (err) throw err;
			console.log(result);
			db.close();
			if(result[0].signIn === "yes"){
				uid = result[0].name;
				console.log(uid);
				MongoClient.connect(url, function(err, db) {
						if (err) throw err;
						var dbo = db.db("runoob");
						var whereStr = {'imgId':req.query.imgId};  // 查询条件
						dbo.collection("headPortrait"). find(whereStr).toArray(function(err, result) { // 返回集合中所有数据
								if (err) throw err;
								// console.log(result);
								result
								res.send({code:200,body:result});
								db.close();
						});
				});
			}
		});
	});
})

// 上传图片
app.post('/file_upload', function (req, res) {
		// console.log(req.body);  // 上传的文件信息
		var resto= res,
			reqs = req,
			result = {'code':1001,'msg':"图片提交失败",'icon':''};
			
			console.log(reqs.body.imgId);
			if(reqs.body.imgId === ''){
				reqs.body.imgId = parseInt(Date.parse(new Date())).toString();
				console.log(reqs.body.imgId);
			}
		//文档更新成功
		MongoClient.connect(url, function(err, db) {
				if (err) throw err;
				var dbo = db.db("runoob");
				var whereStr = {"imgId":reqs.body.imgId};  // 查询条件
				var updateStr = {$set: { "classIcon" : reqs.body.classIcon }};
				dbo.collection("headPortrait").updateOne(whereStr, updateStr, function(err, res) {
						if (err) throw err;
						console.log('======',res.result.nModified)
						if(res.result.nModified == 0){
							MongoClient.connect(url, function (err, db) {
									if (err) throw err;
									console.log('数据库已创建');
									var dbase = db.db("runoob");
									dbase.createCollection('headPortrait', function (err, res) {
											if (err) throw err;
											console.log("创建集合!");
											db.close();
									});
							});
							MongoClient.connect(url, function(err, db) {
									if (err) throw err;
									var dbo = db.db("runoob");
									dbo.collection("headPortrait").insertOne(reqs.body, function(err, res) {
											if (err) throw err;
											console.log("文档插入成功");
											db.close();
											result.code = 200;
											result.id = reqs.body.imgId;
											result.msg = "图片提交成功";
											result.icon = reqs.body.classIcon;
											resto.send(result);
									});
							});
						}else{
							db.close(res);
							// result = {code:200,msg:"图片提交成功",icon:reqs.body.classIcon};
							result.code = 200;
							result.id = reqs.body.imgId;
							result.msg = "图片提交成功";
							result.icon = reqs.body.classIcon;
// 									resto(result);
							console.log("文档更新成功");
							resto.send(result);
						}
				});
		});
})
//消息请求
app.get("/get1",function(req,res){
  console.log("请求url：",req.path)
  console.log("Git请求参数：",req.query)
	MongoClient.connect(url, function(err, db) {
			if (err) throw err;
		var dbo = db.db("runoob");
		var whereStr = {'type':req.query.type};  // 查询条件
		var list = {}
		dbo.collection("chatRecord"). find(whereStr).toArray(function(err, result) { // 返回集合中所有数据
			if (err) throw err;
			// console.log(result);
			db.close();
			if(result.length > 0){
				list.code = 200;
				list.body = result;
				res.send(list);
			}else{
				res.send({'code':200,'body':[]});
			}
		});
	});
})

//存入记录
function todo(obj){
	MongoClient.connect(url, function (err, db) {
			if (err) throw err;
			console.log('数据库已创建');
			var dbase = db.db("runoob");
			dbase.createCollection('chatRecord', function (err, res) {
					if (err) throw err;
					console.log("创建集合!");
					db.close();
					MongoClient.connect(url, function(err, db) {
							if (err) throw err;
							var dbo = db.db("runoob");
							dbo.collection("chatRecord").insertOne(obj, function(err, res) {
									if (err) throw err;
									console.log("记录成功");
									db.close();
							});
					});
			});
	});
}

var hostName = '127.0.0.1';
var ports = 8080;
var server = app.listen(ports,hostName,() => {
  console.log(`服务器运行在http:${hostName}:${ports}`);
	var host = server.address().address;
	var port = server.address().port;
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) { //此处每个回调socket就是一个独立的客户端，通常会用一个公共列表数组统一管理
	//socket.broadcast用于向整个网络广播(除自己之外)
	// 监听客户端发送的消息
	socket.on('clientmessage', function(data) {
		data.type = 'chat';
		data.dateTime = Date.parse(new Date());
		//推送给除自己外其他所有用户的消息，类似于广播
		socket.broadcast.emit('message', {
			text: data
		});
		//公告；
		if(data.toName === ''){
			//记录存入
			todo(data);
			socket.emit('message', {
				text: data
			});
		}else{
			MongoClient.connect(url, function(err, db) {
					if (err) throw err;
					var dbo = db.db("runoob");
					var whereStr = {"name":data.toName};  // 查询条件
					dbo.collection("site").find(whereStr).toArray(function(err, result) {
							if (err) throw err;
							// console.log(result);
							if(result.length !== 0){
								data.type = 'chat';
								//记录存入
								todo(data);
								socket.emit('message', {
									text: data
								});
							}else if(data.name !== ''){
								data.type = 'chat';
								data.text = '没有该用户！'
								socket.emit('message', {
									text: data
								});
							}
							db.close();
					});
			});
		}
		console.log(data)
	});
	//发送给自己的消息
	socket.emit('message', {
		text: '你上线了'
	});
	//告诉所有人上线了(除自己之外)
	socket.broadcast.emit('message', {
		text: uid +'上线了'
	});
	//连接断开，如关闭页面时触发
	socket.on('disconnect', function(data) {
			console.log(data)
			// socket.emit('c_leave','离开');
			//socket.broadcast用于向整个网络广播(除自己之外)
			socket.broadcast.emit('message',{
				text:uid+'离开了',
			});
	})
});