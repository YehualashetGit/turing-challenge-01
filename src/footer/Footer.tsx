import React from  'react';
import './footer.css'
import iconBrief from '../assets/icon-briefcase.svg'


const footerData = [
    {
        name: "GrandParade"
    },
    {
        name: "Seargin"
    },
    {
        name: "DEX Verntures"
    },
    {
        name: "NBC"
    },
    {
        name: "SVT SP Zoo"
    },
    {
        name: "DG Tech"
    },
    {
        name: "PIckSasS"
    },
    {
        name: "BlackRose"
    },
    {
        name: "FrontKom"
    }   
]


const Footer = ()=>{
    return(
        <div className="p-20">
            <p className="footer-header mb-10 text-3xl font-bold">Newest Job Offers</p>
            <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-9 gap-4">         
                {footerData.map((footer, index) =>(
                    <FooterCard {...footer} key={index} />
                ) )}
            </div>        
        </div>
    )

}

interface IFooterProps {
    name: string
}
const FooterCard = (props: IFooterProps) => {

    return(
            <div className="flex flex-col items-center justify-center bg-white p-1 ">
                <div className="icon-circle flex justify-center items-center shadow-lg border border-gray-200 rounded-full overflow-hidden">
                    <img className="icon-brief" src={iconBrief} alt='icon brief' /> 
                </div>
            <h2 className="mt-2 font-bold text-md">{props.name}</h2>
        </div>
    )
}

export default  Footer;