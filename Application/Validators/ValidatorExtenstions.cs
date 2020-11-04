using FluentValidation;

namespace Application.Validators
{
    public static class ValidatorExtenstions
    {
        public static IRuleBuilder<T, string> Password<T>(this IRuleBuilder<T, string> ruleBuilder)
        {
            var option = ruleBuilder
                .NotEmpty().
                MinimumLength(6)
                .WithMessage("Password must have a 6 characster")
                .Matches("[A-Z]")
                .WithMessage("Password must contain 1 uppercase latter")
                .Matches("[a-z]").WithMessage("Password must have a least 1 lower case")
                .Matches("[0-9]").WithMessage("Password must contain at least one number")
                .Matches("[^a-zA-Z0-9]").WithMessage("Password must contain non alphanumreric");

                return option;
        }
    }
}