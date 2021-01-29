
//aficher le footer
let foot = document.querySelector("footer");
foot.innerHTML = `<div>
 <nav>
 <a href="../index.html">Accueil</a></li>
 <a href="../produits/produits.html">produits</a></li>
 <a href="../services/services.html">services</a></li>
 <a href="../contact/contact.html">contact</a></li>
 </nav>
 </div>
 <div class="socials">
   <a href="#" title="Facebook"><i class="fab fa-facebook-square"></i></a>
   <a href="#" title="Instagram"><i class="fab fa-instagram"></i></a>
   <a href="#" title="Twitter"><i class="fab fa-twitter"></i></a>
   <a href="#" title="Youtube"><i class="fab fa-youtube"></i></a>
   <a href="#" title="Pinterest"><i class="fab fa-pinterest-square"></i></a>
   <a href="#" title="Snapshat"><i class="fab fa-snapchat-square"></i></a>
 </div>
 <span>&copy; MONSTERA Team 2020</span> `


//aficher le nav
let sub = document.querySelector("#subnav");
sub.innerHTML = ` 
<ul>
  <li class="sublogo"><a href="../index.html"><img  src="../logos/Smalllogo.svg" alt="small_logo"></a></li>
  <li><a href="../index.html">Accueil</a></li>
  <li><a href="../produits/produits.html">produits</a></li>
  <li><a href="../services/services.html">services</a></li>
  <li><a href="../contact/contact.html">contact</a></li>
  <li><a class="button" href="#"><i class="fas fa-shopping-cart"></i>Panier</a></li>
</ul>
`

