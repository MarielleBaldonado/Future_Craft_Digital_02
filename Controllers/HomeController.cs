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

        public ActionResult Cloud()
        {
            return View();
        }
        public ActionResult Rental()
        {
            return View();
        }
        public ActionResult WebDesign()
        {
            return View();
        }
    }
}