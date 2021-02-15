import React from 'react';

const KnownPoint: React.FC<{}> = () => {
    return (
        <div className="design-div">
            <h2 className="center">KNOWN POINT</h2>
            <h4 className="center">Mobile Design</h4>
            <div className="iframe">
                <iframe width="414" height="736" title="KnownPoint Photo Upload" className="known-point-design card-box-shadow"  src="https://xd.adobe.com/embed/51766479-9c2e-4325-b0c7-ac3099f0efb8-0425/?fullscreen" frameBorder="0" allowFullScreen></iframe>
            </div>
        </div>
    );
}

export default KnownPoint;