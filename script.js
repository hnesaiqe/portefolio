         // hide/show

        
         $(".year-xx").click(function () {
            $(".detail-list-20").toggle("slow");
            $(".detail-list-20").show();
        });
        $(".year-xv").click(function () {
            $(".detail-list-15").toggle("slow");
            $(".detail-list-15").show();
        });
        $(".year-viii").click(function () {
            $(".detail-list-08").toggle("slow");
            $(".detail-list-08").show();
        });
        $(".year-vii").click(function () {
            $(".detail-list-07").toggle("slow");
            $(".detail-list-07").show();
        });


        
        // Popover


        $(document).ready(function () {
            $('[data-toggle="popover"]').popover();
        });
        
                
        // Date et Heure


        function date_heure(id) {
            date = new Date;
            annee = date.getFullYear();
            moi = date.getMonth();
            mois = new Array('Janvier', 'F&eacute;vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao&ucirc;t', 'Septembre', 'Octobre', 'Novembre', 'D&eacute;cembre');
            j = date.getDate();
            jour = date.getDay();
            jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
            h = date.getHours();
            if (h < 10) {
                h = "0" + h;
            }
            m = date.getMinutes();
            if (m < 10) {
                m = "0" + m;
            }
            s = date.getSeconds();
            if (s < 10) {
                s = "0" + s;
            }
            resultat = jours[jour] + ' ' + j + ' ' + mois[moi] + ' ' + annee + ' il est ' + h + ':' + m + ':' + s;
            document.getElementById(id).innerHTML = resultat;
            setTimeout('date_heure("' + id + '");', '1000');
            return true;
        }

        window.onload = date_heure('date_heure');
