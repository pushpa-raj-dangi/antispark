

using Domain.Entities;

namespace ArtiSpark.Core.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
