import React from 'react'
import { Link } from 'react-router-dom';


export default function InputTabs(props) {
    const preventDefault = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <div className='tabbtn' id='tabid'>
                <div className='tabclass'>
                    <button type="button" id="tabid2" class="btn btn-primary" >{props.tabvalue}
                     <span class="badge badge-light"></span>
                    </button>
                    <Link to={preventDefault} className="responsive-tabbtn">

                        {/* <input  type={props.tabtype} name="submit" value={props.tabvalue} /> */}
                    </Link>
                </div>
            </div>
        </div>
    )
}
