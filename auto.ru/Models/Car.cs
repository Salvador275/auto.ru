using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace auto.ru.Models
{
    public class Car
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int BrandId { get; set; }

        public Brand Brand{get; set;}

        public virtual List<Ad> Ads { get; set; }
    }
}
