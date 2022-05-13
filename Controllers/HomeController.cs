using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using term6_Frontend.Models;

namespace term6_Frontend.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            ViewBag.Title = "Home";
            ViewBag.NavLinks = new List<string> {
                "Реализованные проекты",
                "Новости",
                "Контакты"
            };
            ViewBag.Contacts = new List<List<string>>() {
                new List<string>(){ "+7 (900) 900-90-90", "assets/icons/phone_w.svg"},
                new List<string>(){ "info@gmail.com", "assets/icons/mail_w.svg"},
                new List<string>(){ "г. Владивосток ул. Выселковая 49, стр. 3", "assets/icons/place_w.svg" }
            };
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}