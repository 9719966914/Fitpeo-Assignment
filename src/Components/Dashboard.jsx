import React from 'react'
import '../Components/Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear,} from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { faPercentage } from '@fortawesome/free-solid-svg-icons';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Dashboard() {
  return (
    <div className='Dashboard'> 
    <div id='DashboardText' > <span className='icons'><FontAwesomeIcon icon={faGear} /></span> Dashboard</div>
    <div className="navigate"> <span className='icons'><FontAwesomeIcon icon={faChartLine}/></span> Dashboard  </div>
    <div className="navigate"><span className='icons'><FontAwesomeIcon icon={faBarsProgress}/></span>Product <span className='iconA' id='A'><FontAwesomeIcon icon={faArrowRight}/></span> </div>
    <div className="navigate"><span className='icons'><FontAwesomeIcon icon={faPerson}/></span>Customers <span className='iconA' id='B'><FontAwesomeIcon icon={faArrowRight}/></span></div>
    <div className="navigate"><span className='icons'><FontAwesomeIcon icon={faMoneyCheck}/></span>Income <span className='iconA' id='C'><FontAwesomeIcon icon={faArrowRight}/></span></div>
    <div className="navigate"><span className='icons'><FontAwesomeIcon icon={faPercentage}/></span>Promote <span className='iconA' id='D'><FontAwesomeIcon icon={faArrowRight}/></span></div>
    <div className="navigate"><span className='icons'><FontAwesomeIcon icon={faHandsHelping}/></span>Help <span className='iconA' id='E'><FontAwesomeIcon icon={faArrowRight}/></span></div>
    <div className="logIn"><div className="photo"></div><span id='myname'>shivam parashar</span><br /> <span id='role'>project manager</span></div>
    </div>
  )
}
