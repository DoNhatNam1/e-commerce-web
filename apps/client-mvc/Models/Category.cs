using System.ComponentModel.DataAnnotations;

namespace ECommerceWeb.ClientMvc.Models
{
    public class Category
    {
        public int id { get; set; }

        [Required]
        [StringLength(100)]
        public required string name { get; set; }

        public required ICollection<Product> products { get; set; }
    }
}
