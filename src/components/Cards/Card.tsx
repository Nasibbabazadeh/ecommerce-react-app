export interface ICardProps {
    id: number,
    imgSrc: string,
    imgAlt: string,
    title: string,
    description: string

}

export default function Card({ imgSrc, imgAlt, title, description }: Partial<ICardProps>) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm hover:shadow-xl transition-shadow grow-[1]">
            <img src={imgSrc} alt={imgAlt} className="rounded-t-lg w-full h-40 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    )
}
