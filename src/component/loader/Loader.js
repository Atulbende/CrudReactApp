import '../loader/style.css'
function Loader() {
  return (
    <div className="Loader_overlay d-none">
      <div className="Loader_overlay__inner">
        <div className="Loader_overlay__content ">
          <div class="traditional"></div>
        </div>
      </div>
    </div>
  )
}

export default Loader