
interface CardProps {
    title: string;
    description: string;
    features: string[];
    tech: string[];
    url: string;
    animate: string;
    // color: string;
}

const Card: React.FC<CardProps> = ({
    title,
    description,
    features,
    tech,
    url,
    animate,
    // color,
}) => {
    const _css = `bg-gray-200 ring-black ring-2 bg-opacity-50 text-black h-[79%] w-[23%] flex flex-col justify-between items-center space-y-1 rounded-lg py-2 overflow-scroll ${animate}`
    return (
        <div className={_css}>
            <p className="font-extrabold">{title}</p>
            <p className="italic">{description}</p>
            <div className="-translate-x-16">
                <p className="font-bold">Features:</p>
                <ul className="list-disc translate-x-4 mb-2">
                    {
                        features.map(
                            (item, idx) => <li key={idx}>{item}</li>
                        )
                    }
                </ul>
                <p className="font-bold">Tech Stack:</p>
                <ul className="list-disc translate-x-4">
                    {
                        tech.map(
                            (item, idx) => <li key={idx}>{item}</li>
                        )
                    }
                </ul>
            </div>
            <button
                onClick={() => window.location.href=`${url}`}
                className={`border-none bg-white text-black hover:text-white hover:bg-black px-2 py-1 rounded-lg`}
            >
                Visit here! ➔
            </button>
        </div>
    )
}

export default Card;