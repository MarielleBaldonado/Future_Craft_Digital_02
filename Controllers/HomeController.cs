using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Services()
        {
            return View();
        }

        public ActionResult Marketing()
        {
            return View();
        }

        public ActionResult SoftDesignAndDev()
        {
            return View();
        }

        public ActionResult Outsourcing()
        {
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Software()
        {
            return View();
        }

        public ActionResult Windows()
        {
            return View();
        }

        public ActionResult MicrosoftOffice()
        {
            return View();
        }

       
        public ActionResult Rental()
        {
            return View();
        }

        public ActionResult Cart()
        {
            return View();
        }

        public ActionResult Checkout()
        {
            return View();
        }

        // -------------- FOR INSIGHTS ---------------------

        public ActionResult Insights()
        {
            return View();
        }
        
        public ActionResult Blogs()
        {
            return View();
        }

        public ActionResult Testimonials()
        {
            return View();
        }

    
    }
}