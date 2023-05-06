using ArtiSpark.API.Dtos;
using AutoMapper;
using Domain.Entities;

namespace ArtiSpark.API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<UserDto, AppUser>().ReverseMap();
        }
    }
}
