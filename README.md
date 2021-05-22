NODE.js로 게시판 만들기  
======================  
1. User.js에서 password 부분 ```select:false```를 설정하면 DB에서 모델을 읽어 올때 해당 항목값을 읽어오지않음.
2. User.js에서 ```virtual```는 DB에 저장할 필요가 없는 항목을 만들때 사용.  
3. ```var flash = require('connect-flash');  app.use(flash());```  req.flash(문자열, 저장할_값)의 형태로 저장할 값을 배열로 해당문자에 저장함.  req.flash(문자열) 인 경우 해당 문자열에 저장된 값들을 배열로 불러옴.  
4.```isAuthenticated``` 를 정의 할수 없다고 하는 오류 발생. -> index.js에서 ```app.use```는 위에서 부터 순차적으로 실행되므로, 위치를 route 위에서 정의 해주어야 오류가 발생하지 않음...