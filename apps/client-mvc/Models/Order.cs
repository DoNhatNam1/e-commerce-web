
using System.ComponentModel.DataAnnotations;

namespace ECommerceWeb.ClientMvc.Models
{
    public class Order
    {
        public int Id { get; set; }

        public required string orderDate { get; set; }

        [Required]
        [StringLength(100)]
        public required string customerId { get; set; }

        public required ICollection<OrderItem> orderItems { get; set; }
    }
}
