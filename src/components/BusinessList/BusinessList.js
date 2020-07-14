import React from 'react';
import './BusinessList.css'
import '../Business/Business' 
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render () {
      if (this.props.businesses) {
        const businesses = this.props.businesses.map(business => 
          <Business key={business.id} business={business}/>)
        return (
<div className="BusinessList">
  {businesses}
</div>
        );
      } else {
        return (
<div className="BusinessList">
  <h2>Error, check your input</h2>
</div>
        );  
      }
    }
} 

export default BusinessList;