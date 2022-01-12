import "./PicBox.css"

const PicBox = (props) => {
  return (
    <div className="pic-box">
      <div className="pic-box-header">
        <h1>{props.author}</h1>
      </div>
      <div className="pic-box-img">
        <img src={props.url} alt="random" id={props.id}/>
      </div>
      <div className="pic-box-caption">
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, iste magni. Ut ullam fugit vero ex labore molestias itaque tenetur repudiandae dolore officia. Sit possimus impedit saepe quisquam corrupti enim.</h3>
      </div>
    </div>
  )
}

export default PicBox