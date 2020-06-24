using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace auto.ru.Models
{
    public class Ad
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public int? CarId { get; set; }
        public int? CityId { get; set; }
        public string Condition { get; set; }
        public int Run { get; set; }
        public DateTime AdDate { get; set; }
        public double Price { get; set; }

        public User User { get; set; }
        public City City { get; set; }
        public Car Car { get; set; }
    }
}
