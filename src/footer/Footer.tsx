import React from  'react';
import './footer.css'


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
            <p className="mb-10 py-5 text-3xl">Newest Job Offers</p>
            <div className="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-9 gap-4">         
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
                <div className="flex justify-center items-center shadow-lg border border-gray-200 rounded-full overflow-hidden h-20 w-20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                </div>
            <h2 className="mt-4 font-bold text-md">{props.name}</h2>
        </div>
    )
}

export default  Footer;