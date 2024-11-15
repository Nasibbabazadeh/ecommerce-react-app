import { CardContent } from "../../constants/CardContent";
import Card, { ICardProps } from "../Cards/Card";

export default function HomeComponent() {
    return <div>
        <div className="max-w-[1340px] mx-auto flex justify-between my-10">
            {CardContent.map((content: ICardProps) => {
                return (
                    <Card description={content.description} imgAlt={content.imgAlt} imgSrc={content.imgSrc} title={content.title} key={content.id} />
                )
            })}
        </div>
    </div>
}