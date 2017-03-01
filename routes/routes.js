exports.home=function(req,res)
{
	res.render('home',{title: 'iLoveMyCity',
					  headline: 'We Belize that every district has something to say!'
					  });
}

exports.city=function(req, res)
{
	var cityName=req.params.city;
	var title,heading;
	var imageArray=[1,2,3,4];

	if(cityName==='corozal')
	{
		title="Corozal";
		heading="Corozal: Hometown of my parents and la Sabelatoda!";
		imageArray.push(5);
		imageArray.push(6);
	}else if(cityName==='orange_walk')
	{
		title="Orange Walk";
		heading="Orange Walk: 'Suga City'!";
	}else if(cityName==='belize')
	{
		title="Belize";
		heading="Belize: City that loves to party!";
	}else if(cityName==='cayo')
	{
		title="Cayo";
		heading="Cayo: Lovely hillsides and montain views";
	}else if(cityName==='stan_creek')
	{
		title="Stan Creek";
		heading="Dangriga: Hometown of Ms. Universe Belize!";
	}else if(cityName==='punta_gorda')
	{
		title="Punta Gorda";
		heading="Punta Gorda: Filled with culture from our first settlers";
	}

	res.render('city',{title:title,
					  headline:heading,
					  city:cityName,
					  imageArray:imageArray});
}