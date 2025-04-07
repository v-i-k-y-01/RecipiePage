import './Css/App.css';
import IntroText from './components/IntroTextComponent';
import { NutritionComponent } from './components/NutritionComponent';
import { OrderedListComponent } from './components/OrderedListComponent';
import { UnorderedListComponent } from './components/UnorderedListComponent';
import ImageComponent from './components/ImageComponent';
import { Box, Container, Card, CardContent } from '@mui/material';

function App() {
  const title = 'Simple Omelette Recipe';
  const content =
    'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.';

  const PreparationList = [
    'Total: Approximately 10 minutes',
    'Preparation: 5 minutes',
    'Cooking: 5 minutes',
  ];

  const ingredients = [
    '2-3 large eggs',
    'Salt, to taste',
    'Pepper, to taste',
    '1 tablespoon of butter or oil',
    'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
  ];

  const Instructions = [
    'Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
    'Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.',
    'Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
    'Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
    'Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
    'Enjoy: Serve hot, with additional salt and pepper if needed.',
  ];

  const description =
    'The table below shows nutritional values per serving without the additional fillings.';

  const tableData = [
    { name: 'Calories', value: '277 kcal' },
    { name: 'Carbohydrates', value: '0 g' },
    { name: 'Protein', value: '20 g' },
    { name: 'Fat', value: '22 g' },
  ];

  return (
    <Box sx={{ backgroundColor: '#f3e5d7', minHeight: '100vh', py:12}}>
      <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ borderRadius: 4 }}>
          <CardContent> 
          <ImageComponent alt="Omelette Recipe" />
          <IntroText title={title} content={content} />
            <Card sx={{ backgroundColor: '#fff0f5', borderRadius: 2 }}>
              <CardContent>
            <UnorderedListComponent title="Preparation" list={PreparationList} />
            </CardContent>
            </Card>
            <UnorderedListComponent title="Ingredients" list={ingredients} />
            <OrderedListComponent title="Instructions" list={Instructions} />
            <NutritionComponent
              title="Nutrition"
              content={description}
              tableData={tableData}
            />
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default App;
