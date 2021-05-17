NODE.js로 게시판 만들기  
======================  
1. User.js에서 password 부분 ```select:false```를 설정하면 DB에서 모델을 읽어 올때 해당 항목값을 읽어오지않음.
2. User.js에서 ```virtual```는 DB에 저장할 필요가 없는 항목을 만들때 사용.