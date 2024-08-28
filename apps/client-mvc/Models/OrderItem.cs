using System.ComponentModel.DataAnnotations;

namespace ECommerceWeb.ClientMvc.Models
{
    public class OrderItem
    {
        public int id { get; set; }

        public int orderId { get; set; }
        public required Order order { get; set; }

        public int productId { get; set; }
        public required Product product { get; set; }

        public required int quantity { get; set; }
    }
}
