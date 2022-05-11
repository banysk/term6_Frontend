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
            ViewBag.Phone = "+7 (900) 900-90-90";
            ViewBag.Mail = "info@gmail.com";
            ViewBag.Address = "г. Владивосток ул. Выселковая 49, стр. 3";
            ViewBag.NavLinks = new List<string> {
                "Реализованные проекты",
                "Новости",
                "Контакты"
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