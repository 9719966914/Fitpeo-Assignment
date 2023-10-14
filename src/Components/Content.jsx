import React from 'react'
import '../Components/Content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarChart,  faCartPlus, faCoins,  faHandshake, faMoneyBill1Wave, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Content() {
  return (
    <div className='content'>
        <div className="name">Hello Shahrukh <FontAwesomeIcon icon={faHandshake}  id='hand'/> </div>
        {/* <div className="search">Search</div> */}
        <input type="text"  className='search' placeholder='search'/>
        <div className="pricing">
          <div className="circle" id='green'><span  id='earn'><FontAwesomeIcon icon={faCoins} /></span></div>
          <div className="price">Earning<br/>
          <span className='rate'>$198k</span><br />
          <span className='green'>37.8%</span> <span className='black'>this month</span>
          </div>
        </div>
        <div className="pricing">
          <div className="circle" id='purple'><span  id='order'><FontAwesomeIcon icon={faCartPlus} /></span></div>
          <div className="price">Orders
          <br/>
          <span className='rate'>$2.4k</span><br />
          <span className='red'>2%</span> <span className='black'>this month</span>
          </div>
        </div>
        <div className="pricing">
          <div className="circle" id='skyblue'><span  id='balance'><FontAwesomeIcon icon={faMoneyBill1Wave} /></span></div>
          <div className="price">Balance
          <br/>
          <span className='rate'>$2.4k</span><br />
          <span className='red'>2%</span> <span className='black'>this month</span>
          </div>
        </div>
        <div className="pricing">
          <div className="circle" id='pink'><span  id='sale'><FontAwesomeIcon icon={faBarChart} /></span></div>
          <div className="price">Total Sales
          <br/>
          <span className='rate'>$89k</span><br />
          <span className='green'>11%</span> <span className='black'>this month</span>
          </div>
        </div>
        <div className="overview">
          <div className='overview-block'><div className="overview-name">Overview</div><div className="overview-text">Monthly Earning</div></div>
           <select name="Quartery" id="select"className='dropdown'><option value="Quartery" >Quartery</option></select>
          <div className='bars'><div className='bar' id='bar1'></div><div className="month">Jan</div></div>
          <div className='bars'><div className='bar' id='bar2'></div><div className="month">Feb</div></div>
          <div className='bars'><div className='bar' id='bar3'></div><div className="month">Mar</div></div>
          <div className='bars'><div className='bar' id='bar4'></div><div className="month">Apr</div></div>
          <div className='bars'><div className='bar' id='bar5'></div><div className="month">May</div></div>
          <div className='bars'><div className='bar' id='bar6'></div><div className="month">Jun</div></div>
          <div className='bars'><div className='bar' id='bar7'></div><div className="month">Jul</div></div>
          <div className='bars'><div className='bar' id='bar8'></div><div className="month">Aug</div></div>
          <div className='bars'><div className='bar' id='bar9'></div><div className="month">Sep</div></div>
          <div className='bars'><div className='bar' id='bar10'></div><div className="month">Oct</div></div>
          <div className='bars'><div className='bar' id='bar11'></div><div className="month">Nov</div></div>
          <div className='bars'><div className='bar' id='bar12'></div><div className="month">Dec</div></div>
          
         
        </div>
        <div className="customers">
        <div className='customer-block'><div className="customer-name">Customers</div><div className="customer-text">Customers that buy products</div></div>
        <div className="totalcustomer">
        <div className="innercircle"><div className='ab'><span id='cd'><b>65%</b></span><br />Total New <br /> Customers</div></div>
        </div>
        </div>
        <div className="product">
          <div className="product-sell">
            <div className="div1">Product Sell</div>
            <div className="search" id='search1'><span  id='searchIcon'><FontAwesomeIcon icon={faSearch} /></span> Search</div>
            <select name="Quartery"  id='days'><option value="Quartery" >Last 30 Days</option></select>
            <div className="div2">Product Name</div>
            <div className="div">
              <div className="stock">Stock</div>
              <div className="pesa">Price</div>
              <div className="totalsales">Total Sales</div>
              </div>
          </div>
          <div className="product-name">
            <div className="abstract">
              <div className="pic"></div>
              <div className="title"><span className='span'>Abstract 3D</span><br />Lorem ipsum dolor sit amet.</div>
              <div className="stock1">32 in stock</div>
              <div className="pesa1">$ 45.99</div>
              <div className="sales1">20</div>
            </div>
            <div className="sarphens">
              <div className="pic"></div>
              <div className="title"><span className='span'>Sarphens Illustration</span><br />Lorem ipsum dolor sit amet.</div>
              <div className="stock1">32 in stock</div>
              <div className="pesa1">$ 45.99</div>
              <div className="sales1">20</div>
            </div>
          </div>
        </div>
    </div>
  )
}
