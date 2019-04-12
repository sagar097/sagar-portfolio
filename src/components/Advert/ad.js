import React from 'react';

export default class Ad extends React.Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({ google_ad_client: "ca-pub-7376087971883271",
        enable_page_level_ads: true});
    }
    //   <!-- Right Sidebar -->

    render() {

    
        return (
            <div className='ad'>

                <ins className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client="ca-pub-7376087971883271"
                    data-ad-slot={this.props.slot}
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>

            </div>
        );
    }
}




