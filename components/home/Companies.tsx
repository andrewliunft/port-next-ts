interface Props {
    companies: object[];
    title: string;
}

export default function CompaniesComponent({ companies = [], title = "Work Experience" }:Props) {

    return (
        <div>
            <h2 className="subtitle">{title}</h2>
            <div className="company">
                { companies.map(({id, name, link, position, description}: any) => 
                    <div className="company-wrapper" key={ id }>
                        <p className="company-order">{ `0${id}` }</p>
                        <p className="company-detail">
                            { (link !== null) ? <a className='link company-detail-name' target="_blank" href={link}>{ `${name}`}</a> : <span className='company-detail-name'>{ `${name}`}</span> } 
                            { `, ${position}` }
                        </p>
                        <p className="company-description">{ `${description}` }</p>
                    </div>
                ) }
            </div>
        </div>
    )
}
