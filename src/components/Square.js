function Square(props) {

    // - class 속성은 className 이라는 이름 사용
    // - 하나의 요소로 형태로 리턴
    // - HTML 내에 변수 사용 사 중괄호({}) 사용
    return (
        <button className="square">
            {props.value}
        </button>
    );
}

export default Square;