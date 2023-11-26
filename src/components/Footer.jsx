import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div style={{marginTop:'100px'}} className='container-fluid'>
        <div  id='foot' className="row container ms-5  ">
            <div id='foot' className="col-md-2 d-flex flex-column">
                <h5 className='mb-3'>COMMUNITY</h5>
                <a href="">MSI Reward Program</a>
                <a href="">Forums</a>
                <a href="">Social Media</a>
                <a href="">Videos</a>
                <a href="">Gaming Teams</a>
                <a href="">Blogs</a>
                <a href="">Cuatomer Stories</a>
            </div>
            <div className="col-md-2 d-flex flex-column">
            <h5 className='mb-3'>SUPPORT</h5>
                <a href="">Downloads</a>
                <a href="">Member Center</a>
                <a href="">Online Customer Service</a>
                <a href="">Service Locations</a>
                <a href="">Warranty</a>
                <a href="">Laptop Service FAQ</a>
                <a href="">Remote Service</a>
              
            </div>
            <div className="col-md-2 d-flex flex-column">
                <h5 className='mb-3'>NEWS</h5>
                <a href="">Press Room</a>
                <a href="">Awards</a>
                <a href="">RSS</a>
            </div>
            <div className="col-md-4 d-flex flex-column">
                <h5 className='mb-3'>ABOUT US</h5>
                <a href="">About MSI</a>
                <a href="">Mission And Vision</a>
                <a href="">Brand Story</a>
                <a href="">Investor Information</a>
                <a href="">Innovation DNA</a>
                <a href="">CSR</a>
                <a href="">E-waste Management</a>
                <a href="">TOLL-FREE NO. FOR THE E-WASTE: 1800-11-5525</a>
                <a href="">TOLL-FREE NO. OF THE RECYCLER: 1800-212-8783</a>
     
            </div>
            <div className="col-md-2 d-flex flex-column">
                <h5 className='mb-3'>MEDIA</h5>
                <a href="">Brochure</a>
                <a href="">Wallpaper</a>
                <a href="">MSI Apps</a>
                <a href="">PSU Calculator</a>

            </div>
        </div>
        <hr className=' container-fluid mt-5' />
        <div style={{color:'grey'}} className='d-flex justify-content-between'>
            <p className='ms-5'><span style={{fontWeight:'600',fontSize:'25PX'}}>msi</span> Copyright © 2023 Micro-Star INT'L CO., LTD. All rights reserved.</p>
            <p id='foot'  className='me-5'> <a href=""> Cookie Policy</a> <a href="">Privacy Policy</a> <a href="">Terms of Use Contact Us</a> <a href=""><i class="fa-solid fa-earth-americas"></i> India / English</a>  </p>
        </div>
    

    </div>
  )
}

export default Footer