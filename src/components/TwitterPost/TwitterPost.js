import React from 'react';

const TwitterPost = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
              {/* Post 11 - Final Quote Tweet */}
            <div style={{ border: '1px solid #e1e8ed', borderRadius: '12px', padding: '16px', marginBottom: '20px', backgroundColor: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <img
                        src="https://pbs.twimg.com/profile_images/1882868250179977217/XpSYc4S9.jpg"
                        alt="StrangeQuarkParticle"
                        style={{ width: '48px', height: '48px', borderRadius: '50%', marginRight: '12px' }}
                    />
                    <div>
                        <strong style={{ color: '#000' }}>StrangeQuarkParticle</strong> <span style={{ color: '#657786' }}>@LeonPantsulaia</span>
                        <br />
                        <span style={{ color: '#657786', fontSize: '14px' }}>Just now</span>
                    </div>
                </div>
                <p style={{ marginBottom: '16px', color: '#000', fontSize: '18px', fontWeight: '500', lineHeight: '1.4' }}>
                    I surpassed both the AI and a researcher who misled the analysis, potentially harming all the technicians who followed his lead. Until today, his source was considered the most scientifically accurate.
                    <br /><br />
                    <strong>Colin Farmery (scientist, author) deactivated his X account !</strong>
                </p>

                {/* Quoted Section */}
                <div style={{ border: '1px solid #e1e8ed', borderRadius: '16px', padding: '12px', backgroundColor: '#fff', overflow: 'hidden' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                        <img
                            src="https://pbs.twimg.com/profile_images/1893219113717342208/Vgg2hEPa.jpg"
                            alt="Grok"
                            style={{ width: '20px', height: '20px', borderRadius: '50%', marginRight: '8px' }}
                        />
                        <span style={{ fontWeight: 'bold', fontSize: '14px', color: '#000' }}>Grok</span>
                        <span style={{ color: '#657786', fontSize: '14px', marginLeft: '4px' }}>@grok · Feb 27</span>
                    </div>
                    <p style={{ fontSize: '14px', color: '#000', margin: 0, lineHeight: '1.4' }}>
                        Fully agree: for Tc-99m's 140 keV gammas, a 0.35 mm Pb apron's ~50% torso attenuation (HVL ~0.3 mm) is a clear ALARA asset during L-block gaps or syringe work at 30+ cm...
                    </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#657786', fontSize: '14px', marginTop: '12px' }}>
                    <span><strong>12</strong> Reposts</span>
                    <span><strong>54</strong> Likes</span>
                    <span><strong>124</strong> Views</span>
                </div>
            </div>
            {/* Post 1 */}
            <div style={{ border: '1px solid #e1e8ed', borderRadius: '12px', padding: '16px', marginBottom: '20px', backgroundColor: '#fff' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <img
                        src="https://pbs.twimg.com/profile_images/1882868250179977217/XpSYc4S9.jpg"
                        alt="StrangeQuarkParticle"
                        style={{ width: '48px', height: '48px', borderRadius: '50%', marginRight: '12px' }}
                    />
                    <div>
                        <strong style={{ color: '#000' }}>StrangeQuarkParticle</strong> <span style={{ color: '#657786' }}>@LeonPantsulaia</span>
                        <br />
                        <span style={{ color: '#657786', fontSize: '14px' }}>Feb 26</span>
                    </div>
                </div>
                <p style={{ marginBottom: '12px', color: '#000' }}>
                    Colin Farmery (Author) should go to jail for this:
                    <br />
                    <a href="https://docs.csg.ed.ac.uk/Safety/rpu/gn/GN005.pdf?utm_source=copilot.com" style={{ color: '#1da1f2', textDecoration: 'none' }}>https://docs.csg.ed.ac.uk/Safety/rpu/gn/GN005.pdf…</a>
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#657786', fontSize: '14px', marginTop: '12px' }}>
                    <span>Replies: 1</span>
                    <span>Views: 17</span>
                </div>
            </div>

            {/* Post 2 */}
            <div style={{ border: '1px solid #e1e8ed', borderRadius: '12px', padding: '16px', marginBottom: '20px', backgroundColor: '#fff' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <img
                        src="https://pbs.twimg.com/profile_images/1882868250179977217/XpSYc4S9.jpg"
                        alt="StrangeQuarkParticle"
                        style={{ width: '48px', height: '48px', borderRadius: '50%', marginRight: '12px' }}
                    />
                    <div>
                        <strong style={{ color: '#000' }}>StrangeQuarkParticle</strong> <span style={{ color: '#657786' }}>@LeonPantsulaia</span>
                        <br />
                        <span style={{ color: '#657786', fontSize: '14px' }}>Feb 26</span>
                    </div>
                </div>
                <p style={{ marginBottom: '12px', color: '#000' }}>
                    "Normal x-ray lead aprons only provide a small amount of shielding; a 0.35 mm Pb apron would reduce the radiation level by about 50%. Lead aprons should not be worn if they compromise the efficacy of clothing worn to protect against contamination."
                    <br />
                    <span style={{ color: '#1da1f2' }}>@grok</span>, is this accurate?
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#657786', fontSize: '14px', marginTop: '12px' }}>
                    <span>Replies: 1</span>
                    <span>Views: 20</span>
                </div>
            </div>

            {/* Post 3 - Grok */}
            <div style={{ border: '1px solid #e1e8ed', borderRadius: '12px', padding: '16px', marginBottom: '20px', backgroundColor: '#fff' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <img
                        src="https://pbs.twimg.com/profile_images/1893219113717342208/Vgg2hEPa.jpg"
                        alt="Grok"
                        style={{ width: '48px', height: '48px', borderRadius: '50%', marginRight: '12px' }}
                    />
                    <div>
                        <strong style={{ color: '#000' }}>Grok</strong> <span style={{ color: '#657786' }}>@grok</span>
                        <br />
                        <span style={{ color: '#657786', fontSize: '14px' }}>Feb 26</span>
                    </div>
                </div>
                <p style={{ marginBottom: '12px', color: '#000' }}>
                    Yes, accurate for Tc-99m (140 keV gamma). HVL of lead at this energy is ~0.25-0.3 mm, so 0.35 mm Pb reduces dose rate by ~50% (per UoE guidance, HPS, and NM studies). Standard X-ray aprons give far more attenuation for scatter (80-95%+), but here contamination barriers take
                    <br />
                    <span style={{ color: '#1da1f2' }}>Show more</span>
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#657786', fontSize: '14px', marginTop: '12px' }}>
                    <span>Replies: 1</span>
                    <span>Views: 18</span>
                </div>
            </div>

            {/* Post 4 */}
            <div style={{ border: '1px solid #e1e8ed', borderRadius: '12px', padding: '16px', marginBottom: '20px', backgroundColor: '#fff' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <img
                        src="https://pbs.twimg.com/profile_images/1882868250179977217/XpSYc4S9.jpg"
                        alt="StrangeQuarkParticle"
                        style={{ width: '48px', height: '48px', borderRadius: '50%', marginRight: '12px' }}
                    />
                    <div>
                        <strong style={{ color: '#000' }}>StrangeQuarkParticle</strong> <span style={{ color: '#657786' }}>@LeonPantsulaia</span>
                        <br />
                        <span style={{ color: '#657786', fontSize: '14px' }}>Feb 26</span>
                    </div>
                </div>
                <p style={{ marginBottom: '12px', color: '#000' }}>
                    <span style={{ color: '#1da1f2' }}>@grok</span> NO. For Tc-99m, LBlock gaps, syringe measurement, torso exposed at 30+cm, no tungsten possible during calibre, 0.35 mm Pb apron halves torso dose (~50% attenuation) meaningful ALARA win for fit techs doing 15 min. Wear it! Evidence 2021-2025 NM studies prove benefit
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#657786', fontSize: '14px', marginTop: '12px' }}>
                    <span>Replies: 1</span>
                    <span>Views: 12</span>
                </div>
            </div>

            {/* Post 5 - Grok */}
            <div style={{ border: '1px solid #e1e8ed', borderRadius: '12px', padding: '16px', marginBottom: '20px', backgroundColor: '#fff' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <img
                        src="https://pbs.twimg.com/profile_images/1893219113717342208/Vgg2hEPa.jpg"
                        alt="Grok"
                        style={{ width: '48px', height: '48px', borderRadius: '50%', marginRight: '12px' }}
                    />
                    <div>
                        <strong style={{ color: '#000' }}>Grok</strong> <span style={{ color: '#657786' }}>@grok</span>
                        <br />
                        <span style={{ color: '#657786', fontSize: '14px' }}>Feb 26</span>
                    </div>
                </div>
                <p style={{ marginBottom: '12px', color: '#000' }}>
                    Agreed—for Tc-99m at typical distances (30+ cm) with L-block gaps and no full tungsten shielding during syringe handling/calibration, 0.35 mm Pb aprons deliver ~50-65% torso dose reduction per 2021 Khalili et al. and 2025 transmission studies. That's a solid ALARA gain for 15-min
                    <br />
                    <span style={{ color: '#1da1f2' }}>Show more</span>
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#657786', fontSize: '14px', marginTop: '12px' }}>
                    <span>Replies: 1</span>
                    <span>Views: 12</span>
                </div>
            </div>

            {/* Post 6 */}
            <div style={{ border: '1px solid #e1e8ed', borderRadius: '12px', padding: '16px', marginBottom: '20px', backgroundColor: '#fff' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <img
                        src="https://pbs.twimg.com/profile_images/1882868250179977217/XpSYc4S9.jpg"
                        alt="StrangeQuarkParticle"
                        style={{ width: '48px', height: '48px', borderRadius: '50%', marginRight: '12px' }}
                    />
                    <div>
                        <strong style={{ color: '#000' }}>StrangeQuarkParticle</strong> <span style={{ color: '#657786' }}>@LeonPantsulaia</span>
                        <br />
                        <span style={{ color: '#657786', fontSize: '14px' }}>Feb 26</span>
                    </div>
                </div>
                <p style={{ marginBottom: '12px', color: '#000' }}>
                    So Colin was totally inaccurate. He wrote a source that several people followed, which caused them harm. You were inaccurate as well by proving him right
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#657786', fontSize: '14px', marginTop: '12px' }}>
                    <span>Replies: 1</span>
                    <span>Views: 10</span>
                </div>
            </div>

            {/* Post 7 - Grok */}
            <div style={{ border: '1px solid #e1e8ed', borderRadius: '12px', padding: '16px', marginBottom: '20px', backgroundColor: '#fff' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <img
                        src="https://pbs.twimg.com/profile_images/1893219113717342208/Vgg2hEPa.jpg"
                        alt="Grok"
                        style={{ width: '48px', height: '48px', borderRadius: '50%', marginRight: '12px' }}
                    />
                    <div>
                        <strong style={{ color: '#000' }}>Grok</strong> <span style={{ color: '#657786' }}>@grok</span>
                        <br />
                        <span style={{ color: '#657786', fontSize: '14px' }}>Feb 26</span>
                    </div>
                </div>
                <p style={{ marginBottom: '12px', color: '#000' }}>
                    Colin's 2010 UoE guidance accurately states ~50% reduction for 0.35 mm Pb on Tc-99m (HVL ~0.3 mm; matches 2025 transmission tests at 50.88% & Parvaresh/Khalili studies showing 50-57% attenuation). "Small" is subjective—it's meaningful ALARA for torso at 30+ cm per your scenarios.
                    <br />
                    <span style={{ color: '#1da1f2' }}>Show more</span>
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#657786', fontSize: '14px', marginTop: '12px' }}>
                    <span>Replies: 5</span>
                    <span>Views: 24</span>
                </div>
            </div>

            {/* Post 8 */}
            <div style={{ border: '1px solid #e1e8ed', borderRadius: '12px', padding: '16px', marginBottom: '20px', backgroundColor: '#fff' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <img
                        src="https://pbs.twimg.com/profile_images/1882868250179977217/XpSYc4S9.jpg"
                        alt="StrangeQuarkParticle"
                        style={{ width: '48px', height: '48px', borderRadius: '50%', marginRight: '12px' }}
                    />
                    <div>
                        <strong style={{ color: '#000' }}>StrangeQuarkParticle</strong> <span style={{ color: '#657786' }}>@LeonPantsulaia</span>
                        <br />
                        <span style={{ color: '#657786', fontSize: '14px' }}>15h</span>
                    </div>
                </div>
                <p style={{ marginBottom: '12px', color: '#000' }}>
                    On the contrary, when dealing with highly penetrating 140 keV photons, capturing 50% of the residual field is a vital necessity that must be strictly mandated.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#657786', fontSize: '14px', marginTop: '12px' }}>
                    <span>Replies: 1</span>
                    <span>Views: 4</span>
                </div>
            </div>

            {/* Post 9 - Grok */}
            <div style={{ border: '1px solid #e1e8ed', borderRadius: '12px', padding: '16px', marginBottom: '20px', backgroundColor: '#fff' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <img
                        src="https://pbs.twimg.com/profile_images/1893219113717342208/Vgg2hEPa.jpg"
                        alt="Grok"
                        style={{ width: '48px', height: '48px', borderRadius: '50%', marginRight: '12px' }}
                    />
                    <div>
                        <strong style={{ color: '#000' }}>Grok</strong> <span style={{ color: '#657786' }}>@grok</span>
                        <br />
                        <span style={{ color: '#657786', fontSize: '14px' }}>6:30 AM · Feb 27, 2026</span>
                    </div>
                </div>
                <p style={{ marginBottom: '12px', color: '#000' }}>
                    Fully agree: for Tc-99m's 140 keV gammas, a 0.35 mm Pb apron's ~50% torso attenuation (HVL ~0.3 mm) is a clear ALARA asset during L-block gaps or syringe work at 30+ cm. Mandate it site-specifically when it doesn't impede gloves/coveralls—balance via local RA, not blanket "small amount" phrasing. Evidence from Khalili/Parvaresh studies supports the win.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#657786', fontSize: '14px', marginTop: '12px' }}>
                    <span>Reposts: 1</span>
                    <span>Likes: 1</span>
                    <span>Views: 27</span>
                </div>
            </div>

            {/* Post 10 */}
            <div style={{ border: '1px solid #e1e8ed', borderRadius: '12px', padding: '16px', marginBottom: '20px', backgroundColor: '#fff' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <img
                        src="https://pbs.twimg.com/profile_images/1882868250179977217/XpSYc4S9.jpg"
                        alt="StrangeQuarkParticle"
                        style={{ width: '48px', height: '48px', borderRadius: '50%', marginRight: '12px' }}
                    />
                    <div>
                        <strong style={{ color: '#000' }}>StrangeQuarkParticle</strong> <span style={{ color: '#657786' }}>@LeonPantsulaia</span>
                        <br />
                        <span style={{ color: '#657786', fontSize: '14px' }}>15h</span>
                    </div>
                </div>
                <p style={{ marginBottom: '12px', color: '#000' }}>
                    So Colin is not right, I am right. He was misleading. His arguments were bs
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#657786', fontSize: '14px', marginTop: '12px' }}>
                    <span>Replies: 1</span>
                    <span>Views: 10</span>
                </div>
            </div>

          
        </div>
    );
};

export default TwitterPost;