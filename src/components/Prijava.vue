<template>
    <div class="prijava-container" id="prijava">
        <h1>Prijava korisnika</h1>
        <h2>Prijavite se</h2>
        <div class="forma">
            <form class="prijava">
                <label for="email">Vaša email:</label><br>
                <input type="email" name="email" id="email" placeholder="Email adresa"><br><br>
                <label for="lozinka">Lozinka:</label><br>
                <input type="password" name="lozinka" id="lozinka" placeholder="Upišite lozinku"><br><br>
                <div class="buttons">
                    <input type="submit" name="submit" value="Prijava">
                    <input type="reset" value="Reset">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Prijava',
        props: {
            msg: String
        }
    }
</script>

<style scoped>
    div.prijava-container{
        width: 80%;
        margin: 0 auto;
        font-size: 20px;
        font-family: "Times New Roman", Times, serif;
        text-align: center;
        padding-bottom: 50px;
    }
     input[type=text], input[type=password], input[type=email], select{
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        float: left;
        margin-right: 25px;
        font-family: "Times New Roman", Times, serif;
        font-size: 16px;
        margin-bottom: 20px;
    }

    input[type=submit]{
        width: 48%;
        background-color: #4CAF50;
        color: white;
        padding: 10px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        float: right;
        font-size: 16px;   
    }

    h1{
        font-size: 35px;
        font-weight: 500;
        margin-top: 50px;
    }
    h2{
        font-size: 20px;
        margin-bottom: 50px;
    }
    hr{
        width: 70%;
        margin: 0 auto;
        border: 1px solid rgba(1, 1, 1, 0.25);
    }
    div.prijava{
        text-align: left;
        margin: 0 auto;
        width: 70%; 
    }
 input[type=reset]{
        width: 48%;
        background-color: #AF504C;
        color: white;
        padding: 10px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        float: right;
        font-size: 16px;
        transition: 0.3s;
    }
    input[type=submit]:hover {
        background-color: #45a049;
    }

    input[type=reset]:hover{  
        background-color: #923f3c;
    }

    div.buttons{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
   }
</style>
