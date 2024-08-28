using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ECommerceWeb.ClientMvc.Models;

namespace ECommerceWeb.ClientMvc.Controllers
{
    public class ProductsController(ApplicationDbContext context) : Controller
    {
        private readonly ApplicationDbContext _context = context;

    // GET: Products
    public async Task<IActionResult> Index()
        {
            var products = await _context.Products.ToListAsync();
            return View(products);
        }

        // GET: Products/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var product = await _context.Products
                .FirstOrDefaultAsync(m => m.Id == id);
            if (product == null)
            {
                return NotFound();
            }

            return View(product);
        }
    }
}
