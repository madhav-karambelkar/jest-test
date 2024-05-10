import BlankImage from '../Asset/Images/BlankImg.jpeg'

export default function CardPlaceholder() {
    return (
        <>
            <div className="card mt-5" aria-hidden="true">
                <img src={BlankImage} className="card-img-top" alt={BlankImage} />
                <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                        <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-8"></span>
                    </p>
                </div>
            </div>
        </>

    )
}