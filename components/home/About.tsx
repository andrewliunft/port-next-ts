import Image from 'next/image';

export default function AboutComponent({ }) {

    return (
        <div>
            <h2 className="subtitle">About me</h2>
           <div className="photoWrapper">
                <div className="photo">
                    <Image 
                        src={'/images/photo.jpeg'}
                        width={1065}
                        height={710}
                        alt="Tommy Saputra"
                        priority
                    />
                </div>
            </div>
            
            <h3 className="">Tommy Saputra</h3>
            <h4 className="">Front End Developer</h4>
            <p className="paragraph">A Front End Developer based in Australia.</p>
            <p className="paragraph">I am a collaborative team player who values clear communication and feedback. Also, a highly organised person who can manage multiple projects simultaneously while maintaining attention to detail and meeting deadlines.</p>
        </div>
    )
}
