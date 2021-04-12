import React, { useState } from 'react'

const BootstrapTable = () => {
    const [totalCount, setTotalCount] = useState(34)
    const pagelist = 34/10+1 // 4
    return (
        <div>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">SL No.</th>
                    <th scope="col">Preview Image</th>
                    <th scope="col">Header Text</th>
                    <th scope="col">Image Url</th>
                    <th scope="col">CTA Link</th>
                    <th scope="col">Option</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </table>

                <table class="table">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                        <li class="page-item">
                            <button 
                                class="page-link" 
                                onClick={()=>setActivePage(p=>p-1)} 
                                disabled={activePage==1}>
                                    Previous
                            </button>
                        </li>
                        {new Array(pagelist).map((item,index)=>{
                            if(item+1 == activePage || item == activePage || item-1 == active){
                                return (
                                    <li 
                                        key={index} 
                                        class="page-item">
                                        <button 
                                            onClick={()=>setActivePage(item)}
                                            class="page-link active" >{item}</button>
                                    </li>
                                    )
                            }
                        })}
                        <li class="page-item">
                            <button 
                                class="page-link" 
                                onClick={()=>setActivePage(p=>p+1)}
                                disabled={activePage==pagelist}>
                                    Next
                            </button>
                        </li>
                    
                </ul>
                </nav>

        </div>
    )
}
let activePage = 2
export default BootstrapTable
