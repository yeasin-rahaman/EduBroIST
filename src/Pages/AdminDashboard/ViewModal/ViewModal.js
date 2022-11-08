import React from 'react';

const ViewModal = ({ driveLink }) => {

    let googleId = driveLink?.slice(32, 65);
    const viewUrl = `https://drive.google.com/file/d/${googleId}/preview`
    return (
        <div>
            <div className="priceModal">
                <div class="modal fade" id="EverAfterModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="EverAfterModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered  modal-xl">
                        <div class="modal-content">
                            <div class="modal-header bg-dark ">

                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body bg-dark">
                                <div class="container-fluid">
                                    <div class="row align-items-center">

                                        <div className="col-12">

                                            <iframe title="question" src={viewUrl}
                                                className="img-fluid rounded-start w-100 " allow="autoplay">

                                            </iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default ViewModal;