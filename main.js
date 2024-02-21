// 뉴스를 갖고 오는 함수.
// const API_KEY = `1c373cb782eb496db82d499781dfdc42` // api키를 자주 사용하기 위해서 변수로 만든다.
let news = []
const keyword = "아이유";
const PAGE_SIZE = 20;
const API_KEY = `http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines`

const getLatesNews = async () => {
    //url 주소를 가져오기
    const url = new URL(`https://master--newsapp90.netlify.app/top-headlines?q=${keyword}&country=kr&pageSize=${PAGE_SIZE}&apiKey=${API_KEY}`) // 개발자 필요로 하는 함수를 제공해주는데, URL()함수를 만듬. url인스턴스라고 부름. url에 필요한 함수와 변수들을 제공. 새로운 URL인스턴스를 만들어준다.
    const response = await fetch(url) // url을 호출할 수 있는 함수. pending: 보류중!! 대기 상태 그래서 await함수 사용.
    // body 안에 있는, 우리가 보고 싶은 데이터는 JSON으로 뽑아줘야 한다. 어떻게 해야 하나?
    const data = await response.json() // json은 파일 형식 중 하나다. 이미지하면 png, jpg 같은 것처럼. json은 일반 객체를 텍스트 타입화. 서버 통신을 할 때 json타입을 많이 사용한다. 객체 형식으로 주고 받기 좋은 형식이다. 
    news = data.articles;
    console.log("dddd", news) 
};

getLatesNews()