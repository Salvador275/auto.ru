using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace auto.ru.Models
{
    public class Brand
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<Car> Cars { get; set; }
    }
}
