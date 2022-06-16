import './faqs.css'
function Faqs() {
    return (
        <div>
            <div id='faq-main' className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <p id='faqs-p1'>Frequently Asked Questions
                        </p>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button id='faqs-b1' className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        What is ‘Activated Stabilized Oxygen’?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p id='faqs-p2'>Activated Stabilized Oxygen — brand name ASO® — is the active ingredient in ASO Sport™. Taken as a dietary supplement, ASO® provides a concentrated dose of dissolved bioavailable oxygen to boost blood O2 levels and maximize aerobic metabolism. <br /><br />

                                            ASO® is engineered from three simple ingredients: distilled water, natural sea salt, and oxygen molecules. Our proprietary manufacturing process bonds these free oxygen molecules into a stabilized liquid solution that is easily and rapidly absorbed into the bloodstream.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button id='faqs-b1' className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Does ASO Sport™ contain caffeine or sugar?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p id='faqs-p2'>Nope! ASO Sport™ is completely free of stimulants, sweeteners, preservatives, binders, fillers, or any other additives that might impair nutrient absorption. All you get is all you need: essential minerals, and natural bioavailable oxygen.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button id='faqs-b1' className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        How do I use ASO Sport™?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p id='faqs-p2'>You can take ASO Sport™ direct from the bottle — just grab a 1 oz capful before you hit the gym — or add a serving to your bottled water to recharge as you work out.

                                            <br /><br />

                                        For additional recovery power on those days you’ve pushed your muscles to their max, add a dose of ASO® post-workout. Clinical studies indicate that ASO® continues to improve lactate kinetics when taken immediately after training.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button id='faqs-b1' className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        What is Cherry Bo2mb?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p id='faqs-p2'>CHERRY BO2MB™ provides amino acids, minerals, botanicals and essential nutrients to maintain your brain and body at optimum performance. We use ingredients that have been clinically proven in independent studies to increase your mental alertness, clarity and focus; to give you more energy; and to last longer than most other energy drinks. Our product contains no ephedra! The effects you feel are real and long lasting, not artiﬁcially produced short-term boosts.
                                        <br /><br />
                                        CHERRY BO2MB™ helps the body and the brain work together smoothly. The amino acids in CHERRY BO2MB™ contribute directly to the proper functioning of the brain’s neurotransmitters, which are responsible for sending signals to the rest of the body. The vitamins and minerals in CHERRY BO2MB™ keep muscles and organs functioning properly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faqs;