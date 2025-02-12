using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AlgoPathfinderProject.Server.Controllers
{
    public class SortingController : Controller
    {
        // GET: SortingController
        public ActionResult Index()
        {
            return View();
        }

        // GET: SortingController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: SortingController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: SortingController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: SortingController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: SortingController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: SortingController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: SortingController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
