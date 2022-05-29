<?php require_once 'inc/header.php'?>

    <section class="page-hero elements-section">
        <div class="img-wrap">
            <img src="images/page-hero.jpg" alt="" loading="lazy" class="hero-img">
        </div>
        <div class="ctr">
            <div class="hero-caption">
                <div class="row">
                    <div class="col-xl-7 col-lg-7">
                        <!-- Card -->
                        <div class="card dark-card mb-0">
                            <div class="card-body">
                                <h1>Contact Us</h1>
                                <p>It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout. The point of using Lorem Ipsum is that
                                    it has a more-or-less normal distribution of letters, as opposed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="section">
        <div class="ctr">
            <div class="row">
                <div class="col-xl-7 col-lg-7">
                    <!-- Card -->
                    <form action="" method="post">
                        <div class="row g-3">
                            <div class="col-sm-6">
                                <input class="form-field" type="text" name="name" placeholder="Name">
                            </div>
                            <div class="col-sm-6">
                                <input class="form-field" type="email" name="name" placeholder="Your Email">
                            </div>
                            <div class="col-sm-6">
                                <input class="form-field" type="tel" name="name" placeholder="Phone">
                            </div>
                            <div class="col-sm-6">
                                <select class="form-field" name="service_type" id="">
                                    <option value="" disabled selected>Service Type</option>
                                    <option value="design">Web Design</option>
                                    <option value="development">Web Development</option>
                                    <option value="maintainance">Web Maintainance</option>
                                    <option value="marketing">Digital Marketing</option>
                                </select>
                            </div>
                            <div class="col-sm-12">
                                <textarea class="form-field mb-2" name="msg" id="" cols="30" rows="5"
                                    placeholder="Your message"></textarea>
                            </div>
                        </div>
                        <div class="button-wrap">
                            <button type="button" class="button button-one">Submit</button>
                        </div> 
                    </form>
                </div>
                <div class="col-xl-5 col-lg-5">
                    <div class="contact-items flex flex-col aling-center">
                        <ul class="contact-list mb-2">
                            <li class="phone"><a href="tel:+919540012209">(+91) 95 400 12209</a></li>
                            <li class="email"><a href="mailto:viewwings@outlook.com">viewwings@outlook.com</a></li>
                        </ul>
                        <ul class="social-list">
                            <li class="meta"><a href="#"><em class="screen-reader-text">facebook/meta</em></a></li>
                            <li class="twt"><a href="#"><em class="screen-reader-text">twitter</em></a></li>
                            <li class="in"><a href="#"><em class="screen-reader-text">linkedin</em></a></li>
                            <li class="yt"><a href="#"><em class="screen-reader-text">youtube</em></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="map">
        <div class="ctr-fluid">
            <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6996.7703694595075!2d77.2629901770344!3d28.73791448686793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfebeec17dd35%3A0x4935a206bbb59e00!2sDLF%20Ankur%20Vihar%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1650299734624!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>






    <?php require_once 'inc/faq.php';?>
    <?php require_once 'inc/footer.php'?>