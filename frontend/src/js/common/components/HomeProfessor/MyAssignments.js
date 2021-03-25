import React, { Component } from 'react'
import Swal from 'sweetalert2';
import LoadMask from "../Utils/LoadMask/LoadMask";
import { NotificationManager } from "react-notifications";
import { Link } from "react-router-dom"

import DefaultPortrait from "../../../../assets/img/DefaultPortrait.svg"


class MyAssignments extends Component{   
 
    render(){
        console.log('props MyAssignments Home Student:', this.props)
        const { data } = this.props        

        return(
            <React.Fragment>                
                {
                    data.map(assignment => {
                        return(
                            <div className="card mb-2 mr-2 col-lg-5 col-md-12 col-sm-12" key={assignment.id}>
                                <img className="card-img-top" src={(assignment && assignment.cover) ? assignment.cover : DefaultPortrait} alt="Portada del curso"/>
                                <div className="card-body">
                                    <h5 className="card-title">{`${assignment.course.name}, ${assignment.grade.name}, ${assignment.section.name}`}</h5>
                                    <p className="card-text">{assignment.description}</p>
                                    <Link className="blue darken-1 mr-3" to={`${assignment.id}/student`} >
                                        <i className="material-icons">group_add</i>
                                    </Link>
                                    <Link className="text-warning mr-3" to={`${assignment.id}/material`} >
                                        <i className="material-icons">square_foot</i>
                                    </Link>
                                    <a className="px-2" style={{cursor: "pointer", color: "#145af1"}} href={`/#/my_assignment_prof/${assignment.id}/homework`}>
                                        <i className="material-icons">home_work</i>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </React.Fragment>
        )
    }
}

export default MyAssignments