function CardMain(props) {
    return(
        <>
            <div className="stair lg:mb-0 col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-md shadow-lg text-center lg:text-left relative pt-14 px-4 pb-4">
                <div className="image absolute -top-8 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0 rounded-full bg-dviolet p-4">
                    <img
                        src={props.img}
                        alt="brand"
                    />
                </div>
                <h3 className="text-2xl text-dviolet font-bold">{props.title}</h3>
                <p className="text-gray">{props.text}</p>
            </div>
        </>
    )
}

export default CardMain
