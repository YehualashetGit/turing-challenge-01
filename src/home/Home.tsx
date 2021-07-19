import React from 'react';
import './home.css';


const offerData = [
    {
        title: "Juniour Java Developer",
        county: "PickSass",
        city: "Wrchaw, Polska",
        posted: "2 hours ago",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Nam obcaecati laudantium recusandae, debitis eum voluptatem ad, illo voluptatibus temporibus odio provident. Laboriosam accusamus necessitatibus tenetur praesentium ullam voluptates nulla reprehenderit"   
    },
    {
        title: "Juniour Project Manager",
        county: "Frontkom",
        city: "Lublin, Polska",
        posted: "3 hours ago",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Nam obcaecati laudantium recusandae, debitis eum voluptatem ad, illo voluptatibus temporibus odio provident. Laboriosam accusamus necessitatibus tenetur praesentium ullam voluptates nulla reprehenderit"   
    },
    {
        title: "Juniour Project Manager",
        county: "Frontkom",
        city: "Lublin, Polska",
        posted: "1 days ago",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Nam obcaecati laudantium recusandae, debitis eum voluptatem ad, illo voluptatibus temporibus odio provident. Laboriosam accusamus necessitatibus tenetur praesentium ullam voluptates nulla reprehenderit"   
    }

];



const Home = () => {

    return (
        <main>
            <div className="flex flex-row justify-between w-auto mx-20 my-8">
                <p className="text-3xl font-bold">Newest Job Offers</p>
                <div className="flex">
                    <p className="view-offer mr-2">View all Job offers</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                </div>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-20">
               {
                   offerData.map((offer, index) =>(
                       <OfferCard  {...offer} key={index} />
                   ))
               }  
            </div>
        </main>
    )

}
;
interface IOfferProps {
    title: string;
    county: string;
    city: string;
    posted: string;
    description: string;

}
const OfferCard = (props: IOfferProps) => {

    return(
        <div className="flex flex-col items-center justify-center bg-white p-4 border-r-2">
        <div className="w-full flex mb-4">
            <div className="flex-grow">
                <h6 className="card-header font-bold text-md text-2xl ">{props.title}</h6>
                <div className="flex">
                    <p className="text-gray-600 text-1xl mr-4 font-semibold">{props.county} </p>
                    <p className="text-1xl text-gray-600">{props.city}</p>
                 </div>   
            </div>
            <div className="w-30 text-right">
                <span className="mdi mdi-twitter text-blue-400 text-sm"> {props.posted}</span>
            </div>
        </div>
        <div className="w-full mb-4">
            <p className="text-sm">{props.description}</p>
        </div>
        <div className="w-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="left-arrow text-white  float-right h-6 w-6 shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"  className="text-white" />
            </svg>
        </div>
    </div>
    );
}

export default Home;