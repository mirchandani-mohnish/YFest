import React, { Component } from 'react';
import EventCard from './EventCard';
import Axios from 'axios';







class Events extends Component {
    constructor(props){
        super(props);
        this.state = {
            EventArray: [
                {
                    "_id": "61d6b39ce45e106468b35067",
                    "title": "Rebekah Aguilar",
                    "description": "Commodo eu fugiat magna amet sint id velit fugiat fugiat pariatur Lorem aliquip enim. Reprehenderit quis est veniam voluptate pariatur veniam veniam commodo id officia. Qui et velit est dolor ullamco.\r\n"
                },
                {
                    "_id": "61d6b39ce78e3f1e8bb1dd10",
                    "title": "Jacobson Swanson",
                    "description": "Incididunt id aute mollit ad esse quis do veniam fugiat cillum. Duis velit quis laborum ullamco elit qui. Ex est exercitation occaecat cillum do nulla officia ea in minim. Ad amet commodo deserunt ipsum occaecat.\r\n"
                }
            ]
        }
    }


    async componentDidMount(){
        try{
            const events = await Axios.get("/getEvents");
            console.log(events.data);

            this.setState({
                EventArray: events.data
            })
        }catch(err){
            console.log(err);
            
        }
    
    }

    renderEvents = () => {
        
        // const EventList = this.state.EventList.filter((event) => {
        //     return Object.values(event).join("").toLowerCase().includes(this.state.searchTerm.toLowerCase());
        // });
        
        const EventList = this.state.EventArray;
        
        // const LastEventIndex = this.state.CurrentPage * this.state.eventsPerPage;
        // const FirstEventIndex = LastEventIndex - this.state.eventsPerPage;
        // // we take the lastindex and firstindex to generate the filtered list for pagination. 
        // const filteredEvents = this.state.searchTerm !== "" ? (EventList.slice(FirstEventIndex, LastEventIndex)) : this.state.EventArray.slice(FirstEventIndex, LastEventIndex);
        
        
        return EventList.map((event) => (
            
                <EventCard
                EventTitle={event.title}
                EventDescription={event.description}
                EventImage={event.Image}
                />
                
            
           
        ))
    }


    render() {
        return (
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                
                    {this.renderEvents()}
                
            </div>
        );
    }
}

export default Events;









{/*
<div className="w-full md:w-1/2 xl:w-1/3 px-4">
                            <div className="bg-white rounded-lg overflow-hidden mb-10">
                                <img src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg" alt="image" className="w-full" />
                                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                <h3>
                                    <a href="javascript:void(0)" className="
                                    font-semibold
                                    text-dark text-xl
                                    sm:text-[22px]
                                    md:text-xl
                                    lg:text-[22px]
                                    xl:text-xl
                                    2xl:text-[22px]
                                    mb-4
                                    block
                                    hover:text-primary
                                    ">
                                    The ultimate UX and UI guide to card design
                                    </a>
                                </h3>
                                <p className="text-base text-body-color leading-relaxed mb-7">
                                    Lorem ipsum dolor sit amet pretium consectetur adipiscing
                                    elit. Lorem consectetur adipiscing elit.
                                </p>
                                <a href="javascript:void(0)" className="
                                inline-block
                                py-2
                                px-7
                                border border-[#E5E7EB]
                                rounded-full
                                text-base text-body-color
                                font-medium
                                hover:border-primary hover:bg-primary hover:text-white
                                transition
                                ">
                                    View Details
                                </a>
                                </div>
                            </div>
                            </div>
                            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                            <div className="bg-white rounded-lg overflow-hidden mb-10">
                                <img src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg" alt="image" className="w-full" />
                                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                <h3>
                                    <a href="javascript:void(0)" className="
                                    font-semibold
                                    text-dark text-xl
                                    sm:text-[22px]
                                    md:text-xl
                                    lg:text-[22px]
                                    xl:text-xl
                                    2xl:text-[22px]
                                    mb-4
                                    block
                                    hover:text-primary
                                    ">
                                    Creative Card Component designs graphic elements
                                    </a>
                                </h3>
                                <p className="text-base text-body-color leading-relaxed mb-7">
                                    Lorem ipsum dolor sit amet pretium consectetur adipiscing
                                    elit. Lorem consectetur adipiscing elit.
                                </p>
                                <a href="javascript:void(0)" className="
                                inline-block
                                py-2
                                px-7
                                border border-[#E5E7EB]
                                rounded-full
                                text-base text-body-color
                                font-medium
                                hover:border-primary hover:bg-primary hover:text-white
                                transition
                                ">
                                    View Details
                                </a>
                                </div>
                            </div>
                            </div>



*/}
