import React, { Component } from 'react';
import _ from 'lodash';

class pagination extends Component {
  render() {
    const {carCount, onPageChange, pageSize}=this.props;
    const pagesCount=Math.ceil(carCount/pageSize);
    const pages =_.range(1,pagesCount+1)
    return (
      <div className="paginate">
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {pages.map(page=>(pagesCount!==1 ?
                  (<li key={page} onClick={onPageChange.bind(this, page)} className="cursor page-item"><a className="page-link">{page}</a></li>) : null
                ))} 
                    
            </ul>
        </nav>
      </div>
    )
  }
}
export default pagination